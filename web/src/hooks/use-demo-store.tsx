"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { STORAGE_KEY } from "@/lib/constants";
import type { ContractorRecord, DemoStore, GigRecord } from "@/lib/types";

const emptyStore: DemoStore = { contractors: [], gigs: [] };

function readStore(): DemoStore {
  if (typeof window === "undefined") return emptyStore;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as DemoStore) : emptyStore;
  } catch {
    return emptyStore;
  }
}

const DemoStoreContext = createContext<{
  store: DemoStore;
  addContractor: (record: ContractorRecord) => boolean;
  addGig: (gig: GigRecord) => void;
  hydrated: boolean;
} | null>(null);

export function DemoStoreProvider({ children }: { children: ReactNode }) {
  const [store, setStore] = useState<DemoStore>(emptyStore);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setStore(readStore());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }, [store, hydrated]);

  const addContractor = useCallback((record: ContractorRecord) => {
    let added = false;
    setStore((prev) => {
      if (prev.contractors.some((c) => c.contractorId === record.contractorId)) {
        return prev;
      }
      added = true;
      return { ...prev, contractors: [...prev.contractors, record] };
    });
    return added;
  }, []);

  const addGig = useCallback((gig: GigRecord) => {
    setStore((prev) => ({ ...prev, gigs: [...prev.gigs, gig] }));
  }, []);

  const value = useMemo(
    () => ({ store, addContractor, addGig, hydrated }),
    [store, addContractor, addGig, hydrated],
  );

  return (
    <DemoStoreContext.Provider value={value}>{children}</DemoStoreContext.Provider>
  );
}

export function useDemoStore() {
  const ctx = useContext(DemoStoreContext);
  if (!ctx) throw new Error("useDemoStore must be used within DemoStoreProvider");
  return ctx;
}
