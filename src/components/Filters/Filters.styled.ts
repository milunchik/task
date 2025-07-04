import styled from 'styled-components';

interface DarkModeProps {
  darkMode?: boolean;
}

interface ButtonProps {
  active?: boolean;
}

interface BarProps {
  height: number;
}

interface RangeProps {
  zIndex?: number;
}

export const Container = styled.div<DarkModeProps>`
  background-color: ${({ darkMode }) => (darkMode ? '#989898' : '#fff')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
  padding: 20px;
  border-radius: 12px;
`;

export const StickContainer = styled.div`
  width: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Stick = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 15px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.font_size.sm};
  font-weight: ${({ theme }) => theme.font_weight.bold};
`;

export const DarkModeToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Switch = styled.label`
  position: relative;
  width: 40px;
  height: 20px;
  display: inline-block;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;

    &::before {
      content: '';
      position: absolute;
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: rgb(26, 114, 186);

    &::before {
      transform: translateX(20px);
    }
  }
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const SubTitle = styled.h3``;

export const Histogram = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 70px;
  margin: 0;
  padding: 0;
  gap: 2px;
`;

export const Bar = styled.div<BarProps>`
  width: 10px;
  background: ${({ theme }) => theme.colors.histogram_color};
  height: ${({ height }) => `${height}px`};
  border-radius: 2px;
`;

export const DoubleSlider = styled.div`
  position: relative;
  height: 30px;
  margin: 0;
  padding: 0;
`;

export const Track = styled.div`
  position: absolute;
  height: 4px;
  top: 0px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.histogram_color};
  border-radius: 2px;
  z-index: 1;
`;

export const TrackHighlight = styled.div<DarkModeProps>`
  position: absolute;
  height: 4px;
  top: 0px;
  background-color: ${({ darkMode }) => (darkMode ? '#FFFFFF' : '#000000')};
  border-radius: 2px;
  z-index: 2;
`;

export const RangeInput = styled.input<RangeProps>`
  position: absolute;
  pointer-events: all;
  width: 100%;
  background: none;
  appearance: none;
  z-index: ${({ zIndex }) => zIndex || 2};
  pointer-events: none;

  &::-webkit-slider-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6px;
    pointer-events: all;
    position: relative;
    z-index: 3;
  }

  &::-moz-range-thumb {
    height: 16px;
    width: 16px;
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 50%;
    cursor: pointer;
    pointer-events: all;
    border: none;
    z-index: 3;
  }

  &::-webkit-slider-runnable-track {
    height: 4px;
    background: transparent;
  }

  &::-moz-range-track {
    height: 4px;
    background: transparent;
  }
`;

export const PriceBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PriceBox = styled.div<DarkModeProps>`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  width: 45%;

  label {
    display: block;
    font-size: 12px;
    color: ${({ darkMode }) => (darkMode ? '#fffff' : '#text_color')};
    margin-bottom: 8px;
  }

  div {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const ResultSection = styled.div`
  margin-top: 30px;
`;

export const BikeCount = styled.h4``;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
`;

export const Button = styled.button<ButtonProps>`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: ${({ active }) => (active ? '#000' : '#f0f0f0')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 10px 0;
`;

export const ResultsPerPage = styled.div`
  margin-top: 10px;

  select {
    margin-left: 10px;
    padding: 4px;
  }
`;
