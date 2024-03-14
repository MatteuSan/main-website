import React from 'react';
import { NextPage } from 'next';
import DefaultLayout from "../../layouts/DefaultLayout";

const BlogMainPage: NextPage = () => {
  return (
    <DefaultLayout title="BLOG" description="Coming soon.">
      <div style={{ width: '100%', height: 'calc(100vh - (88.65px * 1.55))' }} className="grid pi-center">
        <div className="flex flow-column jc-center ai-center">
          <h1 className="supertitle">Coming soon.</h1>
          <h3 className="subtitle">Good things come to those who wait</h3>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default BlogMainPage;