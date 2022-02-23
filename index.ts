import { requireNativeComponent } from 'react-native';

interface Props {
  minimumZoomScale?: number;
  maximumZoomScale?: number;
}

export default requireNativeComponent<Props>('PinchableView');
