// react
import { ChangeEvent } from 'react';

// third-party
import classNames from 'classnames';

export type InputNumberSize = 'sm' | 'lg';

export interface InputNumberProps {
    id?: string;
    size?: InputNumberSize;
    className?: string;
    value?: string | number;
    step?: number;
    min?: number;
    max?: number;
    onChange?: (value: number | string) => void;
    disabled?: boolean;
    readonly?: boolean;
    onBlur?: () => void;
}

function InputNumber(props: InputNumberProps) {
    const { size, className, onChange, ...otherProps } = props;
    const { value = '', step = 1, min = null, max = null } = props;

    const change = (direction: -1 | 1, prevValue: string | number = value) => {
        // noinspection SuspiciousTypeOfGuard
        let newValue = typeof prevValue === 'string' ? parseFloat(prevValue) : prevValue;

        newValue = (Number.isNaN(newValue) ? 0 : newValue) + step * direction;

        if (max !== null) {
            newValue = Math.min(max, newValue);
        }
        if (min !== null) {
            newValue = Math.max(min, newValue);
        }

        if (newValue !== prevValue && onChange) {
            onChange(newValue);
        }

        return newValue;
    };

    const changeByTimer = (direction: -1 | 1) => {
        let prevValue = value;
        let interval: ReturnType<typeof setInterval>;
        const timer = setTimeout(() => {
            interval = setInterval(() => {
                prevValue = change(direction, prevValue);
            }, 50);
        }, 300);

        const documentMouseUp = () => {
            clearTimeout(timer);
            clearInterval(interval);

            document.removeEventListener('mouseup', documentMouseUp, false);
        };

        document.addEventListener('mouseup', documentMouseUp, false);
    };

    const handleAddMouseDown = () => {
        change(1);
        changeByTimer(1);
    };

    const handleSubMouseDown = () => {
        change(-1);
        changeByTimer(-1);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            if (event.target.value.trim() === '') {
                onChange('');
            } else {
                const value = parseFloat(event.target.value);

                if (value % step === 0) {
                    onChange(Number.isNaN(value) ? min || 0 : value);
                }
            }
        }
    };

    const classes = classNames('input-number', className);
    const formControlClasses = classNames('form-control input-number__input', {
        'form-control-sm': size === 'sm',
        'form-control-lg': size === 'lg',
    });

    return (
        <div className={classes}>
            <input className={formControlClasses} type="number" onChange={handleChange} {...otherProps} />
            <div className="input-number__add" onMouseDown={handleAddMouseDown} />
            <div className="input-number__sub" onMouseDown={handleSubMouseDown} />
        </div>
    );
}

export default InputNumber;
