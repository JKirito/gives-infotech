import Head from 'next/head';
import React from 'react';
import DevelopmentSection from '../components/DevelopmentResource/DevelopmentSection/DevelopmentSection';
import Header from '../components/Header/Header';
import ProjectListContainer from '../components/Project/ProjectListContainer/ProjectListContainer';
import SummarySection from '../components/SummarySection/SummarySection';
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
      <DevelopmentSection />
      <SummarySection />
    </React.Fragment>
  );
}
