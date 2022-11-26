import {useState} from 'react';
import {Element, Layout, Text} from 'uinix-ui';

const colorLabels = {
  silver: 'Silver',
  gold: 'Gold',
  spacegray: 'Space Gray',
};

export function Colors({colors}) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <Layout align="flex-start" spacing="x2">
      {colors.map((color) => {
        const isSelected = selectedColor === color;
        return (
          <Layout key={color} align="center" direction="column" spacing="x2">
            <Element
              b={isSelected ? 'selected' : undefined}
              borderRadius="round"
              p="xs"
            >
              <Element
                bg={`macbook.${color}`}
                borderRadius="round"
                p="x4"
                onClick={() => setSelectedColor(color)}
              />
            </Element>
            {isSelected && (
              <Text styleVariant="small">{colorLabels[color]}</Text>
            )}
          </Layout>
        );
      })}
    </Layout>
  );
}
