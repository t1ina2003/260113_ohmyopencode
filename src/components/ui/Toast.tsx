import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { useToast, type Toast } from "../../context/ToastContext";
import { cn } from "../../lib/utils";

const toastVariants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const icons = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
};

const styles = {
  success: "text-emerald-500 dark:text-emerald-400",
  error: "text-rose-500 dark:text-rose-400",
  info: "text-blue-500 dark:text-blue-400",
};

const ToastItem = ({ id, message, type }: Toast) => {
  const { removeToast } = useToast();
  const Icon = icons[type];

  return (
    <motion.li
      layout
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn(
        "pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl border p-4 shadow-xl shadow-black/5 backdrop-blur-md transition-all",
        "border-zinc-200/50 bg-white/80",
        "dark:border-zinc-800/50 dark:bg-zinc-950/80"
      )}
    >
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", styles[type])} />
      <div className="flex-1">
        <p className="text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
          {message}
        </p>
      </div>
      <button
        onClick={() => removeToast(id)}
        className="group -mr-1 -mt-1 rounded-md p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"
      >
        <X className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300" />
      </button>
    </motion.li>
  );
};

export const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-0 right-0 z-[100] flex w-full flex-col gap-2 p-4 sm:bottom-4 sm:right-4 sm:w-auto sm:max-w-[420px] sm:p-0">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} {...toast} />
        ))}
      </AnimatePresence>
    </div>
  );
};
