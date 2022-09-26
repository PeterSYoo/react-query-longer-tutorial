import { Link } from 'react-router-dom';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from './components/home.page';
import RQSuperHeroesPage from './components/rqsuperheroes.page';
import SuperHeroesPage from './components/superheroes.page';
import RQHomework from './components/rqhomework.page';
import Nav from './components/nav.components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RQSuperHero from './components/rqsuperhero.page';
import ParallelQueriesPage from './components/parallelqueries.page';
import DynamicParallelPage from './components/dynamicparallel.page';
import DependentQueriesPage from './components/dependentQueries.page';
import { PaginatedQueriesPage } from './components/paginatedQueries.page';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
            <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallelPage heroIds={[1, 3]} />}
            />
            <Route
              path="/rq-dependent"
              element={<DependentQueriesPage email="vishwas@example.com" />}
            />
            <Route path="/rq-paginated" element={<PaginatedQueriesPage />} />
            <Route path="/rq-homework" element={<RQHomework />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
