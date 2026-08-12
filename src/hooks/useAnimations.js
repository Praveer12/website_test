import { useEffect, useRef, useState } from 'react';

/**
 * Hook that triggers animation when element enters viewport.
 * Returns [ref, isVisible] - attach ref to the element you want to observe.
 * 
 * @param {Object} options
 * @param {number} options.threshold - 0 to 1, how much of element must be visible (default 0.15)
 * @param {string} options.rootMargin - margin around root (default '0px 0px -60px 0px')
 * @param {boolean} options.triggerOnce - only trigger once (default true)
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px', triggerOnce = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

/**
 * Hook that counts up from 0 to target number when triggered.
 * 
 * @param {number} end - target number
 * @param {boolean} shouldStart - whether to start counting
 * @param {number} duration - animation duration in ms (default 2000)
 * @param {string} suffix - string to append after number (default '')
 * @param {string} prefix - string to prepend before number (default '')
 * @param {number} decimals - number of decimal places (default 0)
 */
export function useCountUp(end, shouldStart, { duration = 2000, suffix = '', prefix = '', decimals = 0 } = {}) {
  const [value, setValue] = useState(`${prefix}0${suffix}`);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();
    const numericEnd = parseFloat(end);

    if (isNaN(numericEnd)) {
      setValue(`${prefix}${end}${suffix}`);
      return;
    }

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * numericEnd;

      setValue(`${prefix}${current.toFixed(decimals)}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [shouldStart, end, duration, suffix, prefix, decimals]);

  return value;
}

/**
 * Returns staggered delay styles for child elements.
 * @param {number} index - child index
 * @param {number} baseDelay - base delay in ms (default 100)
 */
export function getStaggerDelay(index, baseDelay = 100) {
  return `${index * baseDelay}ms`;
}
