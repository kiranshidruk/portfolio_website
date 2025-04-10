import { motion } from "framer-motion";
import React from "react";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface SkillBadgeProps {
  icon: IconComponent;
  name: string;
  color?: string;
}

export default function SkillBadge({ icon: Icon, name, color = "text-blue-500" }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="bg-gray-50 p-5 rounded-lg shadow-sm text-center"
    >
      <div className={`text-4xl mb-3 ${color}`}>
        <Icon />
      </div>
      <h3 className="font-medium">{name}</h3>
    </motion.div>
  );
}
