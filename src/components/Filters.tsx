import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

interface FilterSectionProps {
  title: string;
  items: string[];
  defaultOpen?: boolean;
}

const FilterSection = ({ title, items, defaultOpen = false }: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-lg font-bold uppercase text-black leading-[40px] tracking-normal mb-3"
      >
        {title}
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {isOpen && (
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox id={item} />
              <label
                htmlFor={item}
                className="text-sm text-muted-foreground cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      )}
      {!isOpen && (
        <p className="text-muted-foreground text-lg font-normal leading-none tracking-normal">All</p>
      )}
    </div>
  );
};

interface FiltersProps {
  productCount: number;
}

const Filters = ({ productCount }: FiltersProps) => {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="border-b border-border py-4 px-4">
        <p className="text-sm font-medium">{productCount} ITEMS</p>
      </div>

      {showFilters && (
        <div className="px-4">
          <div className="border-b border-border py-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="customizable" />
              <label
                htmlFor="customizable"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                CUSTOMIZABLE
              </label>
            </div>
          </div>
          <FilterSection
            title="IDEAL FOR"
            items={["Men", "Women", "Baby & Kids"]}
            defaultOpen
          />
          
          <FilterSection
            title="OCCASION"
            items={["Casual", "Formal", "Party"]}
          />
          <FilterSection
            title="WORK"
            items={["Office", "Remote", "Outdoor"]}
          />
          <FilterSection
            title="FABRIC"
            items={["Cotton", "Polyester", "Wool", "Silk"]}
          />
          <FilterSection
            title="SEGMENT"
            items={["Premium", "Budget", "Mid-range"]}
          />
          <FilterSection
            title="SUITABLE FOR"
            items={["Summer", "Winter", "All Season"]}
          />
          <FilterSection
            title="RAW MATERIALS"
            items={["Organic", "Synthetic", "Recycled"]}
          />
          <FilterSection
            title="PATTERN"
            items={["Solid", "Striped", "Printed", "Checked"]}
          />
        </div>
      )}
    </aside>
  );
};

export default Filters;
