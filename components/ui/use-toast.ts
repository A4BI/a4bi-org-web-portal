import { Toast } from "@/components/ui/toast"

export interface ToastProps {
  title?: string
  description?: string
  action?: React.ReactNode
  cancel?: React.ReactNode
}

export function useToast() {
  return {
    toast: ({ title, description, action, cancel }: ToastProps) => {
      // Implementation will be handled by the Sonner toast
      console.log('Toast:', { title, description })
    },
  }
}