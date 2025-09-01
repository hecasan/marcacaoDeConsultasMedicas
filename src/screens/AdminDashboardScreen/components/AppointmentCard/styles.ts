import styled from 'styled-components/native';
import theme from '../../../../styles/theme';
import { getStatusColor } from '../../utils/statusHelpers';

/**
 * Estilos para o componente AppointmentCard
 * 
 * Demonstra:
 * - Cards de consulta com visual profissional
 * - Uso de utilitários para cores de status
 * - Layout responsivo e bem estruturado
 */

export const Container = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  padding: ${theme.spacing.medium}px;
  margin-bottom: ${theme.spacing.medium}px;
  border: 1px solid ${theme.colors.border};
  elevation: 2;
  shadow-color: #000;
  shadow-opacity: 0.08;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.small}px;
`;

export const DoctorInfo = styled.View`
  flex: 1;
`;

export const DoctorName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 4px;
`;

export const Specialty = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  opacity: 0.7;
`;

export const DateTime = styled.Text`
  font-size: 14px;
  color: ${theme.colors.primary};
  margin-top: ${theme.spacing.small}px;
  font-weight: 500;
`;

export const StatusBadge = styled.View<{ status: string }>`
  background-color: ${props => getStatusColor(props.status as any) + '20'};
  padding: 6px 12px;
  border-radius: 20px;
  align-self: flex-start;
`;

export const StatusText = styled.Text<{ status: string }>`
  color: ${props => getStatusColor(props.status as any)};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const ActionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${theme.spacing.medium}px;
  gap: ${theme.spacing.small}px;
`;

export const ActionButton = styled.TouchableOpacity<{ variant: 'confirm' | 'cancel' }>`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  background-color: ${props => 
    props.variant === 'confirm' 
      ? theme.colors.success 
      : theme.colors.error
  };
`;

export const ActionButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;
