import { motion } from "framer-motion";
import { buttonTap } from "../../animations/hoverAnimations";

const MotionButton = motion.button;
const MotionAnchor = motion.a;

const variants = {
  primary:
    "bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black",
  secondary:
    "border border-white/20 text-white hover:bg-white/10 dark:border-white/20",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
};

export default function Button({
  children,
  variant = "primary",
  as = "button",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className}`;

  if (as === "a") {
    return (
      <MotionAnchor className={classes} {...buttonTap} {...props}>
        {children}
      </MotionAnchor>
    );
  }

  return (
    <MotionButton className={classes} {...buttonTap} {...props}>
      {children}
    </MotionButton>
  );
}
