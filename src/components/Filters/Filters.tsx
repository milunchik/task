import { useState } from 'react';
import * as S from './Filters.styled';

const MIN = 0;
const MAX = 500;

export const Filters: React.FC = () => {
  const [minPrice, setMinPrice] = useState(60);
  const [maxPrice, setMaxPrice] = useState(360);
  const [darkMode, setDarkMode] = useState(false);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - 10);
    setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + 10);
    setMaxPrice(value);
  };

  const histogramData = Array.from({ length: 50 }).map((_, i) => {
    const center = 25;
    const distance = Math.abs(i - center);
    const height = 60 - distance * 2 + Math.random() * 5;
    return Math.max(10, height);
  });

  return (
    <S.Container darkMode={darkMode}>
      <S.Header>
        <S.Title>Filters</S.Title>
        <S.DarkModeToggle>
          <span>Dark mode</span>
          <S.Switch>
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span />
          </S.Switch>
        </S.DarkModeToggle>
      </S.Header>

      <S.Stick />

      <S.Section>
        <S.SubTitle>Price Range</S.SubTitle>

        <S.Histogram>
          {histogramData.map((h, i) => (
            <S.Bar key={i} height={h} />
          ))}
        </S.Histogram>

        <S.DoubleSlider>
          <S.RangeInput
            type="range"
            min={MIN}
            max={MAX}
            value={minPrice}
            onChange={handleMinChange}
            zIndex={4}
          />
          <S.RangeInput
            type="range"
            min={MIN}
            max={MAX}
            value={maxPrice}
            onChange={handleMaxChange}
            zIndex={5}
          />
          <S.Track />
          <S.TrackHighlight
            style={{
              left: `${(minPrice / MAX) * 100}%`,
              width: `${((maxPrice - minPrice) / MAX) * 100}%`,
            }}
          />
        </S.DoubleSlider>

        <S.PriceBoxes>
          <S.PriceBox>
            <label>Min price</label>
            <div>${minPrice}</div>
          </S.PriceBox>
          <S.PriceBox>
            <label>Max price</label>
            <div>${maxPrice}</div>
          </S.PriceBox>
        </S.PriceBoxes>
      </S.Section>

      <S.ResultSection>
        <S.BikeCount>found</S.BikeCount>

        <S.ButtonGroup>
          <S.Button>Lowest price</S.Button>
          <S.Button>Closest</S.Button>
          <S.Button>Newest Listings</S.Button>
          <S.Button>Specification</S.Button>
          <S.Button active>Retailer</S.Button>
        </S.ButtonGroup>

        <S.Pagination>
          <S.Button>First</S.Button>
          <S.Button>Prev</S.Button>
          {[...Array(10)].map((_, i) => (
            <S.Button key={i}>{i + 1}</S.Button>
          ))}
          <S.Button>Next</S.Button>
          <S.Button>Last</S.Button>
        </S.Pagination>

        <S.ResultsPerPage>
          Results per page
          <select>
            <option>3</option>
            <option>5</option>
            <option>10</option>
          </select>
        </S.ResultsPerPage>
      </S.ResultSection>
    </S.Container>
  );
};
