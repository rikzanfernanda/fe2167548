import useCartStore from "../store/cartStore"
import { Button, Text, HStack, VStack, Image, Flex } from "@chakra-ui/react"
import useItemStore from "../store/itemStore"

export default function ItemsContainer() {
  const addToCart = useCartStore((state) => state.addItem)
  const cart = useCartStore((state) => (state.items))
  const { items, removeItem } = useItemStore()

  const handleAddToCart = (item) => {
    let cek = false;
    for (let i = 0; i < cart.length; i++) {
      if (item.id === cart[i].id) {
        cek = true
      }
    }
    if (!cek) addToCart({...item, quantity: 1});
  }

  return (
    <Flex flexWrap="wrap" width="full" zIndex="base" gap="1rem" padding="1rem">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onRemove={() => removeItem(item.id)}
          addToCart={() => handleAddToCart(item)}
          // addToCart={() => addToCart({...item, quantity: 1})}
        />
      ))}
    </Flex>
  )
}

function Item({ item, onRemove, addToCart }) {
  return (
    <VStack
      rounded="xl"
      boxShadow="2xl"
      border="1px"
      borderColor="gray.100"
      padding="1rem"
    >
      <Button aria-label='item-delete-button' size="xs" onClick={onRemove}>
        X
      </Button>
      <Image src={item.image} alt={item.image} fit="cover" boxSize="10rem" />
      <HStack width="full" justify="space-between">
        <Text>Stock :</Text>
        <Text aria-label='item-stock'>{item.stock}</Text>
      </HStack>
      <Text aria-label='item-name' fontWeight="semibold" fontSize="1.5rem">
        {item.name}
      </Text>
      <Text aria-label='item-price'>Rp. {item.price}</Text>
      <Button aria-label='item-add-to-cart-button' onClick={addToCart}>Add to cart</Button>
    </VStack>
  )
}
