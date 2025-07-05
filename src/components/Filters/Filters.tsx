import { useState } from 'react';
import * as S from './Filters.styled';
import type { ProductType } from '../../types/productType';
import type { FiltersType } from '../../types/filtersType';
import { ProductItem } from '../Product/Product';

const MIN = 0;
const MAX = 4000;

export const Filters: React.FC<FiltersType> = ({ products }) => {
  const [minPrice, setMinPrice] = useState(60);
  const [maxPrice, setMaxPrice] = useState(360);
  const [darkMode, setDarkMode] = useState(false);
  const [sortBy, setSortBy] = useState<
    'lowest' | 'closest' | 'newest' | 'retailer' | 'specification'
  >();

  console.log(products);

  const getSpecification = (product: ProductType) => {
    const waterRes = parseInt(product.waterResistance);
    const power = parseInt(product.powerReserve);
    const score = product.functions?.length || 0;

    return waterRes + power + score * 10;
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - 10);
    setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + 10);
    setMaxPrice(value);
  };

  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice,
  );

  console.log(filteredProducts);

  const sortProducts = (products: ProductType[]) => {
    switch (sortBy) {
      case 'lowest':
        return [...products].sort((a, b) => a.price - b.price);
        break;

      case 'newest':
        return [...products].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;

      case 'closest':
        return [...products].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );

      case 'retailer':
        return [...products].sort((a, b) => a.retailer.localeCompare(b.retailer));
        break;

      case 'specification':
        return [...products].sort((a, b) => getSpecification(b) - getSpecification(a));
        break;

      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [resultsPerPage, setResulsPerPage] = useState(5);

  const totalPages = Math.ceil(sortedProducts.length / resultsPerPage);

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage,
  );

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
        <S.Result>{paginatedProducts.length} products found</S.Result>

        <S.ButtonGroup>
          <S.FilterText>Order by</S.FilterText>

          <S.FiltersGroup>
            <S.Button active={sortBy === 'lowest'} onClick={() => setSortBy('lowest')}>
              Lowest price
            </S.Button>
            <S.Button active={sortBy === 'closest'} onClick={() => setSortBy('closest')}>
              Closest
            </S.Button>
            <S.Button active={sortBy === 'newest'} onClick={() => setSortBy('newest')}>
              Newest Listings
            </S.Button>
            <S.Button
              active={sortBy === 'specification'}
              onClick={() => setSortBy('specification')}
            >
              Specification
            </S.Button>
            <S.Button active={sortBy === 'retailer'} onClick={() => setSortBy('retailer')}>
              Retailer
            </S.Button>
          </S.FiltersGroup>
        </S.ButtonGroup>

        <S.PaginationContainer>
          <S.Pagination>
            <S.PaginationBtn onClick={() => setCurrentPage(1)}>First</S.PaginationBtn>
            <S.PaginationBtn onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
              Prev
            </S.PaginationBtn>
            {[...Array(totalPages)].map((_, i) => (
              <S.PaginationBtn key={i} onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </S.PaginationBtn>
            ))}
          </S.Pagination>

          <S.Pagination>
            <S.PaginationBtn onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}>
              Next
            </S.PaginationBtn>
            <S.PaginationBtn onClick={() => setCurrentPage(totalPages)}>Last</S.PaginationBtn>
          </S.Pagination>

          <S.ResultsPerPage>
            Results per page
            <S.ItemNumber
              type="number"
              name="number"
              id="number"
              placeholder="5"
              value={resultsPerPage}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value > 0) {
                  setResulsPerPage(value);
                  setCurrentPage(1);
                }
              }}
            ></S.ItemNumber>
          </S.ResultsPerPage>
        </S.PaginationContainer>
        <ProductItem products={paginatedProducts} />
      </S.ResultSection>
    </S.Container>
  );
};
