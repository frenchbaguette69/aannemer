"use client";

import {
  createContext,
  cloneElement,
  isValidElement,
  useContext,
  useMemo,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type SheetContextValue = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const SheetContext = createContext<SheetContextValue | null>(null);

function useSheetContext() {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error("Sheet components must be used within <Sheet>");
  }
  return context;
}

export function Sheet({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const value = useMemo(() => ({ open, setOpen }), [open]);

  return <SheetContext.Provider value={value}>{children}</SheetContext.Provider>;
}

type TriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function SheetTrigger({ children, className, onClick, ...rest }: TriggerProps) {
  const { setOpen } = useSheetContext();

  return (
    <button
      type="button"
      className={className}
      onClick={(event) => {
        onClick?.(event);
        setOpen(true);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

type SheetContentProps = {
  children: ReactNode;
  className?: string;
};

export function SheetContent({ children, className = "" }: SheetContentProps) {
  const { open, setOpen } = useSheetContext();
  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 transition ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        role="dialog"
        aria-modal="true"
        className={`absolute right-0 top-0 flex h-full w-80 max-w-[90%] flex-col bg-white p-6 shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } ${className}`}
      >
        {children}
      </aside>
    </div>,
    document.body,
  );
}

type CloseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  asChild?: boolean;
};

export function SheetClose({
  children,
  className,
  asChild = false,
  onClick,
  ...rest
}: CloseProps) {
  const { setOpen } = useSheetContext();

  if (asChild && isValidElement(children)) {
    // Narrow to elements that may have an onClick prop
    type Clickable = { onClick?: (e: ReactMouseEvent<any>) => void };

    const child = children as ReactElement<Clickable>;
    return cloneElement(child, {
      // no need to spread child.props
      onClick: (event: ReactMouseEvent<HTMLElement>) => {
        child.props.onClick?.(event);
        onClick?.(event as unknown as ReactMouseEvent<HTMLButtonElement>);
        setOpen(false);
      },
    });
  }

  return (
    <button
      type="button"
      className={className}
      onClick={(event) => {
        onClick?.(event);
        setOpen(false);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

