import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 16,
    marginBottom: 20,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#131513ff",
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    color: "#020c09ff",
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#444",
    marginBottom: 12,
    textAlign: "center",
  },
  category: {
    fontSize: 15,
    color: "#010a07ff",
    marginBottom: 6,
  },
  rating: {
    fontSize: 15,
    color: "#f4a261",
    marginBottom: 6,
  },
  discount: {
    fontSize: 15,
    color: "#15ce15ff",
    marginBottom: 6,
  },
});

const ProductDetailScreen = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const product = params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ alignSelf: 'flex-start', marginBottom: 10 }}>
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 6, paddingHorizontal: 12, backgroundColor: '#eee', borderRadius: 8 }}>
          <Text style={{ fontSize: 16 }}>← Back</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: product.thumbnail as string }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
      <Text style={styles.rating}>⭐ {product.rating}</Text>
      <Text style={styles.discount}>Discount: -{product.discountPercentage}%</Text>
    </ScrollView>
  );
};

export default ProductDetailScreen;
