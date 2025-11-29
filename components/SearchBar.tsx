"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const SearchBar = () => {
    const router = useRouter();

    const [inputValue, setInputValue] = useState("");
    const [display, setDisplay] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const suggestions = ["Áo thun nam", "Áo thun nữ", "Quần jean", "Váy mùa hè"];

    const typingSpeed = 80; 
    const deletingSpeed = 40;
    const holdDelay = 3000; 
    const timerRef = useRef<number | null>(null);

    useEffect(() => {        
        if (isFocused || inputValue) {
            setDisplay("");
            return;
        }

        let suggestionIndex = 0;
        let charIndex = 0;
        let deleting = false;

        const run = () => {
            const current = suggestions[suggestionIndex];
            if (!deleting) {
                // type
                setDisplay(current.slice(0, charIndex + 1));
                charIndex += 1;
                if (charIndex === current.length) {
                    deleting = true;
                    timerRef.current = window.setTimeout(run, holdDelay);
                } else {
                    timerRef.current = window.setTimeout(run, typingSpeed);
                }
            } else {
                // delete
                setDisplay(current.slice(0, charIndex - 1));
                charIndex -= 1;
                if (charIndex === 0) {
                    deleting = false;
                    suggestionIndex = (suggestionIndex + 1) % suggestions.length;
                    timerRef.current = window.setTimeout(run, typingSpeed);
                } else {
                    timerRef.current = window.setTimeout(run, deletingSpeed);
                }
            }
        };

        run();

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [isFocused, inputValue]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = inputValue.trim();

        if (name) {
            router.push(`/list/name=${encodeURIComponent(name)}`);
        }
    };

    return (
        <form
            className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
            onSubmit={handleSearch}
        >
            <input
                type="text"
                name="name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={inputValue ? inputValue : display || "Tìm sản phẩm, ví dụ: áo thun"}
                aria-label="Search products"
                className="flex-1 outline-none bg-transparent"
            />
            <button type="submit" className="cursor-pointer" aria-label="Search">
                <Image src="/search.png" alt="Search" width={16} height={16} />
            </button>
        </form>
    );
};

export default SearchBar;
