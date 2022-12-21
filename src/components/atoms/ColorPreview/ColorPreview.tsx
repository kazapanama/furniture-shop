import { FC } from 'react';
import { ColorsDictionary } from '../../../dictionaries/Colors';
import { ColorVariant } from '../../../types/Products';

interface ColorPreviewProps {
  colorOptions: ColorVariant[];
}

const ColorPreview: FC<ColorPreviewProps> = ({ colorOptions }) => {
  if (colorOptions.length === 0) return null;

  return (
    <div className="w-full bg-slate-100 p-2 flex gap-5">
      {colorOptions.map((option, index) => (
        <div
          style={{ backgroundColor: ColorsDictionary[option.color][1] }}
          className="w-12 h-12 border"
          key={index}
        />
      ))}
    </div>
  );
};

export default ColorPreview;
