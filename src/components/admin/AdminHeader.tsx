import { Bell, Menu, User } from "lucide-react";

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export default function AdminHeader({
  onMenuClick,
}: AdminHeaderProps) {
  return (
    <header className="flex h-16 items-center border-b bg-white px-4 sm:px-6">
      {/* Mobile menu */}
      <button
        type="button"
        onClick={onMenuClick}
        className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
        aria-label="Open navigation"
      >
        <Menu size={22} />
      </button>

      {/* Page context */}
      <div className="hidden lg:block">
        <p className="text-sm text-gray-500">
          Restaurant Management
        </p>
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-3">
        <button
          type="button"
          className="relative rounded-lg p-2 text-gray-600 hover:bg-gray-100"
          aria-label="Notifications"
        >
          <Bell size={20} />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-gray-100"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white">
            <User size={17} />
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-gray-900">
              Administrator
            </p>

            <p className="text-xs text-gray-500">
              Admin
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}