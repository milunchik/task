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
        <S.Result>found</S.Result>

        <S.ButtonGroup>
          <S.FilterText>Order by</S.FilterText>

          <S.FiltersGroup>
            <S.Button>Lowest price</S.Button>
            <S.Button>Closest</S.Button>
            <S.Button>Newest Listings</S.Button>
            <S.Button>Specification</S.Button>
            <S.Button active>Retailer</S.Button>
          </S.FiltersGroup>
        </S.ButtonGroup>

        <S.PaginationContainer>
          <S.Pagination>
            <S.PaginationBtn>First</S.PaginationBtn>
            <S.PaginationBtn>Prev</S.PaginationBtn>
            {[...Array(10)].map((_, i) => (
              <S.PaginationBtn key={i}>{i + 1}</S.PaginationBtn>
            ))}
          </S.Pagination>

          <S.Pagination>
            <S.PaginationBtn>Next</S.PaginationBtn>
            <S.PaginationBtn>Last</S.PaginationBtn>
          </S.Pagination>

          <S.ResultsPerPage>
            Results per page
            <S.ItemNumber type="number" name="number" id="number" placeholder="5"></S.ItemNumber>
          </S.ResultsPerPage>
        </S.PaginationContainer>
      </S.ResultSection>
    </S.Container>
  );
};
