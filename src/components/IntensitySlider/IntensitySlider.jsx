import * as Slider from "@radix-ui/react-slider";
import "./IntensitySlider.css";

const IntensitySlider = ({ value, onChange }) => {
    return (
        <Slider.Root
            className="slider-root"
            min={1}
            max={5}
            step={1}
            value={[value]}
            onValueChange={(val) => onChange(val[0])}
        >
            <Slider.Track className="slider-track">
                <Slider.Range className="slider-range" />
            </Slider.Track>

            <Slider.Thumb className="slider-thumb" />
        </Slider.Root>
    );
};

export default IntensitySlider;
