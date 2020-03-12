import mappet from 'mappet';

const categoryName = (label, source) => {
  return label.toUpperCase();
  // console.log('source', source, label);
  // if (source.category && source.category.name === 'Diamond Sponsor') {
  //   return `1@${source.category.name}`;
  // }
  // if (source.category && source.category.name === 'Gold Sponsor') {
  //   return `2@${source.category.name}`;
  // }
  // if (source.category && source.category.name === 'Silver Sponsor') {
  //   return `3@${source.category.name}`;
  // }
  // if (source.category && source.category.name === 'Bronze Sponsor') {
  //   return `4@${source.category.name}`;
  // }
  // if (source.category === null) {
  // }
  // return 'Other';
  // return source.category ? source.category.name : '';
};

const schema: any = {
  id: 'id',
  title: 'company.title',
  description: 'category.name',
  companyLogo: 'imageUri',
  website: 'website',
  facebook: 'social.facebook',
  twitter: 'social.twitter',
  linkedin: 'social.linkedin',
  categoryName: ['company', () => 'Other'],
};

const schemaMapper = mappet(schema);
/* eslint-disable */
export const companyMapper = data => {
  console.log(schemaMapper(data), data);
  console.log('dataaa', data.category ? data.category : '');
  return schemaMapper(data);
};
