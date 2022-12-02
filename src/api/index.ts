import axios from 'axios';
import {NOTION_URL, NOTION_TOKEN} from '@env';

export const api = axios.create({
  baseURL: `${NOTION_URL}`,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    'Notion-Version': '2022-06-28',
    Authorization: `Bearer ${NOTION_TOKEN}`,
  },
});
