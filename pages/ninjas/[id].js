import React from 'react'

// Run at build time for static site generation
export async function getStaticProps({ params }) {
  const id = params.id;
  const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await response.json();

  return {
    props: {
      ninja: data
    }
  }
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map((path) => (
    {
      params: { id: path.id.toString() }
    }
  ))

  return {
    paths,
    fallback: false
  }
}

export default function Details({ ninja }) {
  return (
    <div>
      <h1>Details for {ninja.name}</h1>
      <p>{ ninja.email }</p>
      <p>{ ninja.website }</p>
      <p>{ ninja.address.city }</p>
    </div>
  )
}
