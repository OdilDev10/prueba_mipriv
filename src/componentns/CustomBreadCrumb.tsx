import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';

const CustomBreadCrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const isLast = index === pathSnippets.length - 1;

    // Si es un número, omitirlo
    if (!isNaN(Number(snippet))) {
      return null;
    }

    const breadcrumbItem = {
      title: snippet,
      href: isLast ? null : `/${pathSnippets.slice(0, index + 1).join('/')}`,
      onClick: isLast ? undefined : () => {/* Función de clic para elementos no finales */},
    };

    return breadcrumbItem;
  }).filter(Boolean);

  return (
    <Breadcrumb separator=">" items={breadcrumbItems as any} />
  );
};

export default CustomBreadCrumb;
