import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import type { ButtonSize, ButtonVariant } from "../_lib/theme";

/**
 * Pill-shaped brand button.
 *
 * Renders as an `<a>` when `href` is provided (uses `next/link` for internal
 * routes) and a `<button>` otherwise. Styling is driven by the utility
 * classes defined in `app/globals.css` (`.btn`, `.btn-primary`, etc.) so the
 * theme file remains the single source of truth.
 */

type CommonProps = {
  variant?: ButtonVariant;
  size?: Exclude<ButtonSize, "btn">;
  className?: string;
  children: ReactNode;
};

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type Props = AnchorProps | ButtonProps;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Button(props: Props) {
  const {
    variant = "btn-primary",
    size,
    className,
    children,
    ...rest
  } = props as CommonProps & { href?: string };

  const cls = cx("btn", variant, size, className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorProps;
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);
    if (isExternal) {
      return (
        <a className={cls} href={href} {...anchorRest}>
          {children}
        </a>
      );
    }
    return (
      <Link className={cls} href={href} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
