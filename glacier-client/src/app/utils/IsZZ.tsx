import { createContext, useContext, ReactNode, useEffect, useState } from 'react';

'use client';


interface ZZContextType {
    isZZ: boolean | null;
}

const ZZContext = createContext<ZZContextType | undefined>(undefined);

export function ZZProvider({ children }: { children: ReactNode }) {
    const [isZZ, setIsZZ] = useState<boolean | null>(null);

    useEffect(() => {
        if (isZZ === null) {
            initializeIsZZ();
        }
    }, [isZZ]);

    const initializeIsZZ = async () => {
        useEffect(() => {
            if (window.location.pathname.includes('ZZ/')) {
                const controller = new AbortController();
                const timeout = setTimeout(() => controller.abort(), 400);

                fetch('/isZZ', { signal: controller.signal })
                    .then(response => {
                        clearTimeout(timeout);
                        if (!response.ok) throw new Error('Network response was not ok');
                        setIsZZ(true);
                    })
                    .catch(error => {
                        setIsZZ(false);
                        if (error.name === 'AbortError') {
                            console.error('Request timed out, no ZZ detected');
                        } else {
                            console.error('Fetch error:', error);
                        }
                    });
            }
        }, []);
    };

    return (
        <ZZContext.Provider value={{ isZZ }}>
            {children}
        </ZZContext.Provider>
    );
}

export function useZZ(): boolean | null {
    const context = useContext(ZZContext);
    if (context === undefined) {
        throw new Error('useZZ must be used within ZZProvider');
    }
    return context.isZZ;
}