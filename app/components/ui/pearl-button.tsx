import type {AnchorHTMLAttributes, ReactNode} from "react";

type PearlButtonProps=AnchorHTMLAttributes<HTMLAnchorElement>&{
  children?:ReactNode;
  href?:string;
  icon?:ReactNode;
};

export function PearlButton({children="Explore My Research",className="",href="#research",icon="↗",...props}:PearlButtonProps){
  return <a className={`pearl-button ${className}`.trim()} href={href} {...props}>
    <span className="pearl-button__surface" aria-hidden="true"/>
    <span className="pearl-button__glint" aria-hidden="true"/>
    <span className="pearl-button__label">{children}</span>
    <span className="pearl-button__arrow" aria-hidden="true">{icon}</span>
  </a>;
}
