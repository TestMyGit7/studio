"use client";

import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import { RootState, AppDispatch } from '@/lib/store';
import { increment, decrement, incrementByAmount } from '@/lib/store/features/counterSlice';
import { MinusIcon, PlusIcon } from 'lucide-react';

export default function ReduxCounter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center space-x-4">
        <Button variant="outline" size="icon" onClick={() => dispatch(decrement())} aria-label="Decrement count">
          <MinusIcon className="h-4 w-4" />
        </Button>
        <span className="text-2xl font-bold w-12 text-center" aria-live="polite">{count}</span>
        <Button variant="outline" size="icon" onClick={() => dispatch(increment())} aria-label="Increment count">
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => dispatch(incrementByAmount(5))} className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Increment by 5
        </Button>
      </div>
      <p className="text-xs text-center text-muted-foreground">This counter uses Redux Toolkit for state management.</p>
    </div>
  );
}
