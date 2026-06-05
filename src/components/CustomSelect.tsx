"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import styles from "./components.module.css";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  name: string;
  options: Option[];
  placeholder: string;
  required?: boolean;
}

export default function CustomSelect({ name, options, placeholder, required }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const selectedLabel = options.find(opt => opt.value === selectedValue)?.label || placeholder;

  return (
    <div className={styles.customSelectContainer} ref={dropdownRef}>
      <input type="hidden" name={name} value={selectedValue} required={required} />
      
      <div 
        className={`${styles.customSelectTrigger} ${isOpen ? styles.customSelectOpen : ""} ${selectedValue ? styles.customSelectFilled : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectedValue ? "" : styles.customSelectPlaceholder}>{selectedLabel}</span>
        <ChevronDown size={18} className={styles.customSelectIcon} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{ originY: 0 }}
            className={styles.customSelectDropdown}
          >
            <ul className={styles.customSelectList}>
              {options.map((opt) => (
                <li 
                  key={opt.value} 
                  className={`${styles.customSelectItem} ${selectedValue === opt.value ? styles.customSelectItemSelected : ""}`}
                  onClick={() => handleSelect(opt.value)}
                >
                  {opt.label}
                  {selectedValue === opt.value && <Check size={16} className={styles.checkIcon} />}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
