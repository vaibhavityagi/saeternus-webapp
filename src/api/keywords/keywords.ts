type SeoKeywords = { [key: string]: string[] };
export function getSeoKeywords() {
  const keywords: SeoKeywords = {
    mainCourse: [
      'Geographical Information system',
      'GIS System',
      'Projection System',
      'Geodatabase',
      'GIS Layers',
      'Georeferencing',
      'Projection Transformation',
      'Digitisation',
      'Attribute',
      'ArcGIS',
      'Clip Management',
      'Mosaic',
      'Raster Calculator',
      'Table Calculation',
      'Rater & Vector Analysis',
      'Query Builder',
      'Change Detection',
      'Map Preparation',
      'Q GIS',
      'Vector Operation',
      'Raster Operation',
      'GIS analysis',
      'Remote Sensing',
      'Geo spatial technology',
      'Geoinformatics',
      'GPS',
      'Remote Sensing',
      'Erdas Imagine',
      'Digital Data',
      'Satellite Image Technology',
      'Electromagnetic Spectrum',
      'Sensors',
      'Sensor Platforms',
      'Aerial Photography',
      'Digital Imagery',
      'Image Processing',
      'Satellite Data',
      'FCC',
      'Image Referencing',
      'Image Transformation',
      'Image Mosaics',
      'Image Enhancement',
      'Image Fusion',
      'Image Classification',
      'Vector Data',
      'Raster Data',
      'Digital Classification',
      'Unsupervised Classification',
      'Supervised Classification',
      'Visual Interpretation',
      'Digital Analysis',
      'Optical Data',
      'Microwave Data',
      'LiDAR Data',
      'Hyperspectral Data',
      'Spatial Modeling',
      'UAVs',
      'Geographical Information System',
      'Resolution',
      'Satellite Image Pre Processing',
      'Image Referencing',
      'Image Transformation',
      'Image Mosaics',
      'Image Enhancement',
      'Image Fusion',
      'Image Classification',
      'Vector Data',
      'Raster Data',
      'Digital Classification',
      'Unsupervised Classification',
      'Supervised Classification',
      'Visual Interpretation',
      'Digital Analysis',
      'Optical Data',
      'Microwave Data',
      'LiDAR Data',
      'Hyperspectral Data',
      'Spatial Modeling',
      'UAVs',
      'Geographical Information System',
      'Resolution',
      'SPSS',
      'Statistics',
      'Analysis',
      'Data',
      'Regression',
      'Logistic Regression',
      'Cluster Analysis',
      'Factor Analysis',
      'Survival Analysis',
      'Python',
      'Data Analysis',
      'Data Visualization',
      'Pandas',
      'Matplotlib',
      'NumPy',
      'Folium',
      'Remote Sensing',
      'Observation',
      'Digital Data',
      'Satellite Image Technology',
      'Electromagnetic Spectrum',
      'Sensors',
      'Sensor Platforms',
      'Aerial Photography',
      'Digital Imagery',
      'Image Processing',
      'Satellite Data',
      'FCC',
      'Research Methodology',
      'Research Design',
      'Writing',
      'Literature Review',
      'Hypothesis Formulation',
      'Research Proposal',
      'Data Collection',
      'Sampling Techniques',
      'Questionnaire Design',
      'Data Preprocessing',
      'Remote Sensing',
      'GIS',
      'Project',
    ],
  };
  return keywords;
}
export const formatKeywords = (keywords: string[]) => {
  const formattedKeywords = keywords.map((keyword: string) => keyword.trim());
  return (
    formattedKeywords.slice(0, -1).join(', ') +
    ', ' +
    formattedKeywords[formattedKeywords.length - 1]
  );
};