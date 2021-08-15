import Head from 'next/head';
import React from 'react';
import Header from '../components/Header/Header';
import ProjectListContainer from '../components/Project/ProjectListContainer/ProjectListContainer';
import TagLine from '../components/TagLineSection/TagLine';
import TopSection from '../components/TopSection/TopSection';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <TopSection />
      <TagLine />
      <ProjectListContainer />
    </React.Fragment>
  );
}
