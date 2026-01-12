import { motion } from "framer-motion";
import { Construction, Bell } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useToast } from "../context/ToastContext";

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  const { addToast } = useToast();

  const handleNotify = () => {
    addToast(`You'll be notified when ${title} is ready!`, "success");
  };

  return (
    <div className="flex min-h-[80vh] w-full items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex w-full max-w-md flex-col items-center text-center"
      >
        <div className="relative z-10 w-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black/20 sm:p-12">
          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-500/10" />
          <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/10" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 flex items-center justify-center"
          >
            <div className="rounded-2xl bg-zinc-100/50 p-4 ring-1 ring-zinc-900/5 dark:bg-zinc-800/50 dark:ring-white/10">
              <Construction className="h-10 w-10 text-zinc-500 dark:text-zinc-400" strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
          >
            This feature is currently under construction. We're crafting something special for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              onClick={handleNotify}
              variant="default"
              className="group gap-2 rounded-full pl-5 pr-6"
            >
              <Bell className="h-4 w-4 transition-transform group-hover:rotate-12" />
              Notify me when ready
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
