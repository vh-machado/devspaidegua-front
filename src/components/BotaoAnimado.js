import React from 'react';
import { Pressable, Animated } from 'react-native';

//Componente Pressable customizado com Animated para gerar o botão animado
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function BotaoAnimado({ onPress, estilo, escalaMinima=0.9, children }) {

  // Valor de escala inicial (padrão)
  const animatedButtonScale = new Animated.Value(1);

  // Evento PressIn diminui a escala do botão para 0.9
  const onPressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: escalaMinima,
      useNativeDriver: true,
    }).start();

  };

  // Evento PressOut volta com a escala inicial de 1 do botão
  const onPressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  // Estilo animado para a animação da escala do botão
  const animatedScaleStyle = {
    transform: [{ scale: animatedButtonScale }],
  };

  return (
    <AnimatedPressable
      style={[animatedScaleStyle, estilo]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}>
      {children}
    </AnimatedPressable>
  );
}
