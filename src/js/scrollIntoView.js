export const scrollSectionIntoView = (sectionId) => {
  const domElement = document.getElementById(sectionId);

  if (domElement) domElement.scrollIntoView();
};