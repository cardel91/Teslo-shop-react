import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, type KeyboardEvent } from "react";
import { Link, useParams, useSearchParams } from "react-router";
import { cn } from "@/lib/utils";
import { CustomLogo } from "@/components/custom/CustomLogo";

export const Header = () => {

    // const [cartCount] = useState(3);
    const [searchParams, setSearchParams] = useSearchParams();
    const inputRef = useRef<HTMLInputElement>(null);


    const query = searchParams.get('query') || '';

    const { gender } = useParams();


    const handleSearch = (event: KeyboardEvent) => {
        if (event.key !== 'Enter') return;
        const newParams = new URLSearchParams();
        const query = inputRef.current?.value;
        if (!query) {
            newParams.delete('query');
            setSearchParams(newParams)
        } else {

            newParams.set('query', inputRef.current!.value);
            setSearchParams(newParams);
        }
    }

    return <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <CustomLogo />

                {/* Navigation - Desktop */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link to={"/"} className={cn("text-sm font-medium transition-colors hover:text-primary", !gender ? "underline underline-offset-4" : '')}>
                        All
                    </Link>
                    <Link to="/gender/men" className={cn("text-sm font-medium transition-colors hover:text-primary", gender === 'men' ? "underline underline-offset-4" : '')}>
                        Men
                    </Link>
                    <Link to="/gender/women" className={cn("text-sm font-medium transition-colors hover:text-primary", gender === 'women' ? "underline underline-offset-4" : '')}>
                        Women
                    </Link>
                    <Link to="/gender/kids" className={cn("text-sm font-medium transition-colors hover:text-primary", gender === 'kids' ? "underline underline-offset-4" : '')}>
                        Kids
                    </Link>

                </nav>

                {/* Search and Cart */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex md:m-2 items-center space-x-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                ref={inputRef}
                                placeholder="Buscar productos..." className="pl-9 w-64 h-9"
                                onKeyDown={handleSearch}
                                defaultValue={query}
                            />
                        </div>
                    </div>

                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Search className="h-5 w-5" />
                    </Button>

                    <Link to={'/auth/login'}>
                        <Button
                            variant={'default'}
                            size={"sm"}
                            className=""
                        >
                            Login
                        </Button>
                    </Link>

                    <Link to={'/admin'}>
                        <Button
                            variant={'destructive'}
                            size={"sm"}
                            className=""
                        >
                            Admin
                        </Button>
                    </Link>

                    {/* <Button variant="ghost" size="icon" className="relative">
                        <ShoppingBag className="h-5 w-5" />
                        {cartCount > 0 && <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                            {cartCount}
                        </span>}
                    </Button> */}
                </div>
            </div>
        </div>
    </header>;
};
