import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, List, Star, User } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Categories from "./pages/Categories.jsx";
import LatestPosts from "./pages/LatestPosts.jsx";
import PopularPosts from "./pages/PopularPosts.jsx";
import MyProfile from "./pages/MyProfile.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Categories",
    to: "/categories",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Latest Posts",
    to: "/latest-posts",
    icon: <Star className="h-4 w-4" />,
  },
  {
    title: "Popular Posts",
    to: "/popular-posts",
    icon: <Star className="h-4 w-4" />,
  },
  {
    title: "My Profile",
    to: "/my-profile",
    icon: <User className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="categories" element={<Categories />} />
              <Route path="latest-posts" element={<LatestPosts />} />
              <Route path="popular-posts" element={<PopularPosts />} />
              <Route path="my-profile" element={<MyProfile />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;