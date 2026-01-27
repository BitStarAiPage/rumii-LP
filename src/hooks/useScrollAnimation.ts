"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number; // 要素がビューポートに入る割合（0-1）
  rootMargin?: string; // ルートマージン
  triggerOnce?: boolean; // 一度だけトリガーするか
}

/**
 * スクロール連動アニメーション用カスタムフック
 * IntersectionObserverを使用して要素がビューポートに入ったときにクラスを付与
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

/**
 * 複数要素のスクロールアニメーション用フック
 */
export function useScrollAnimationGroup(
  count: number,
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(count).fill(false)
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setVisibleItems((prev) => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
          }
        },
        {
          threshold,
          rootMargin,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [count, threshold, rootMargin, triggerOnce]);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el;
  };

  return { setRef, visibleItems };
}
