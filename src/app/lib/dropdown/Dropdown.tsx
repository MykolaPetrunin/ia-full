'use client';

import {
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

export const Dropdown: FC<PropsWithChildren<{ trigger: ReactNode }>> = ({
  trigger,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'flip',
        options: { fallbackPlacements: ['top-start', 'top-end', 'bottom-end'] },
      },
    ],
  });

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        referenceElement &&
        !referenceElement.contains(event.target as Node) &&
        !(popperElement && popperElement.contains(event.target as Node))
      ) {
        setIsOpen(false);
      }
    },
    [referenceElement, popperElement],
  );
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className="cursor-pointer inline-flex"
        ref={(el) => setReferenceElement(el)}
        onClick={toggleDropdown}
      >
        {trigger}
      </div>
      {isOpen &&
        createPortal(
          <div
            ref={(el) => setPopperElement(el)}
            style={styles.popper}
            {...attributes.popper}
            onClick={() => setIsOpen(false)}
            className="dropdown"
          >
            {children}
          </div>,
          document.body,
        )}
    </>
  );
};
