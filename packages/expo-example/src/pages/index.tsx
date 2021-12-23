import React from 'react';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from '@react-navigation/native';
import { Icon } from 'dice-ui';
import { routes } from '../navigation/routes';

const Home = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://img01.yzcdn.cn/vant/logo.png' }} style={styles.logo} />
          <Text style={styles.title}>Dice</Text>
        </View>
        <View>
          {routes.map(item => (
            <Link style={styles.link} key={item.href} to={{ screen: item.href, params: {} }}>
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
                <Icon name="arrow" size={16} />
              </View>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 40,
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#f7f8fa',
    borderRadius: 99,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 16,
    width: '100%',
  },
  link: {
    height: 40,
    marginBottom: 12,
  },
  logo: {
    height: 32,
    width: 32,
  },
  text: {
    color: '#323233',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 40,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    marginLeft: 16,
  },
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default Home;