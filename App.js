import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper'
import AppNavigator from './src/navigation/index'
import { Provider as NoteProvider } from './src/context/NotesContext';

export default function App(){
  return (
    <NoteProvider>
      <AppNavigator />
    </NoteProvider>
  )
} 