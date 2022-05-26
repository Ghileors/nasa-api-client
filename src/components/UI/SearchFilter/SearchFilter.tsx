import React, { FC, FormEvent, useState } from 'react';

interface FormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement;
  latest: HTMLInputElement;
}

interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

interface Props extends HTMLFormElement {
  setSearchParams: any;
}

const SearchFilter = () => {
  // {
  //   postQuery, latest, setSearchParams;
  // }
  // const [search, setSearch] = useState(postQuery);
  // const [checked, setChecked] = useState(latest);

  // const startsFrom = latest ? 80 : 1;

  // const handleSubmit = (event: FormEvent<YourFormElement>) => {
  //   event.preventDefault();
  //   const query = event.currentTarget.elements.search?.value;
  //   const isLatest = event.currentTarget.elements.latest?.checked;

  //   let params = {};

  //   if (query.length) params = { post: query };
  //   if (isLatest) params = { ...params, latest: 'true' };

  //   setSearchParams(params);
  // };

  return (
    <form autoComplete="off">
      <input type="search" name="search" />
      <label>
        latest: <input type="checkbox" name="latest" />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchFilter;
