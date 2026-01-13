
import React from 'react';
import {
  Clock,
  ShieldCheck,
  MapPin,
  Smartphone,
  CheckCircle,
  MessageCircle,
  Mail,
  Phone,
  Smile,
  Frown,
  Ghost,
  Activity,
  UserPlus,
  Heart,
  RefreshCw
} from 'lucide-react';
import { BenefitItem, ServiceItem } from './types';

export const THEME = {
  primary: '#006D77',
  secondary: '#83C5BE',
  accent: '#EDF6F9',
  dark: '#212529',
};

export const BENEFITS: BenefitItem[] = [
  {
    id: '1',
    title: 'Comodidade e economia de tempo e dinheiro',
    description: 'Economia no deslocamento e gastos extras.',
    icon: <Clock className="w-6 h-6 text-[#006D77]" />
  },
  {
    id: '2',
    title: 'Tecnologia segura para sua privacidade total',
    description: 'Sessões online com plataformas confiáveis.',
    icon: <ShieldCheck className="w-6 h-6 text-[#006D77]" />
  },
  {
    id: '3',
    title: 'Flexibilidade para encaixar na sua rotina',
    description: 'Escolha horários que combinem com você.',
    icon: <Smartphone className="w-6 h-6 text-[#006D77]" />
  },
  {
    id: '4',
    title: 'Conforto para se expressar no seu ambiente',
    description: 'Fale onde se sentir mais à vontade.',
    icon: <Smile className="w-6 h-6 text-[#006D77]" />
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Ansiedade',
    description: 'Sintomas como preocupação excessiva, tensão, insônia e medos persistentes. A terapia ajuda a compreender e lidar com essas emoções.',
    icon: 'Shell'
  },
  {
    id: '2',
    title: 'Depressão',
    description: 'Sentimentos de tristeza profunda, desânimo e perda de interesse. Com escuta acolhedora, é possível resgatar o sentido e o desejo.',
    icon: 'Frown'
  },
  {
    id: '3',
    title: 'Fobias',
    description: 'Medos intensos e desproporcionais que limitam a vida cotidiana. O processo terapêutico ajuda a identificar a origem e trabalhar o enfrentamento.',
    icon: 'Ghost'
  },
  {
    id: '4',
    title: 'TOC (Transtorno Obsessivo-Compulsivo)',
    description: 'Pensamentos repetitivos e rituais compulsivos podem causar sofrimento. A terapia busca abrir espaço para o sujeito além do sintoma.',
    icon: 'Brain'
  },
  {
    id: '5',
    title: 'Luto',
    description: 'Vivências de perda podem causar tristeza profunda, confusão e sensação de vazio. A terapia ajuda a elaborar o que foi perdido e ressignificar o caminho.',
    icon: 'Heart'
  },
  {
    id: '6',
    title: 'Baixa autoestima',
    description: 'Insegurança, autocrítica constante e dificuldade de reconhecer seu próprio valor. A terapia ajuda a fortalecer a relação consigo mesmo.',
    icon: 'UserX'
  }
];
