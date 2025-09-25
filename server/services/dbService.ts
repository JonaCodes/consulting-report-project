import { SalesforceData } from '../models/SalesforceData';

export const getCompanyData = async (companyId: string) => {
  const data = await SalesforceData.findAll({
    where: { companyId },
    order: [['year', 'DESC']],
    limit: 1
  });

  return data[0] || null;
};