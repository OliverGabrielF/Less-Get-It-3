import React, { useState } from 'react';
import { Modal, View, TextInput, Text, TouchableOpacity, Switch, Button, Image, } from 'react-native';
import styles from '../styles/modal_style';

const EditModal = ({ visible, onClose, onSave, onDelete, entityData, setEntityData, isEditing = false, fields, title, }) => {

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{title}</Text>

          {fields.map((field) => {
            if (field.type === 'text') {
              return (
                <TextInput
                  key={field.name}
                  style={styles.input}
                  placeholder={field.placeholder}
                  placeholderTextColor="gray"
                  value={entityData[field.name]}
                  onChangeText={(text) =>
                    setEntityData({ ...entityData, [field.name]: text })
                  }
                />
              );
            }
            return null;
          })}

          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={onSave} style={styles.actionButton}>
              <Text style={styles.actionButtonText}>
                {isEditing ? 'Save' : 'Add'}
              </Text>
            </TouchableOpacity>
            {isEditing && (
              <TouchableOpacity
                onPress={onDelete}
                style={[styles.actionButton, { backgroundColor: 'red' }]}
              >
                <Text style={styles.actionButtonText}>Delete</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={onClose}
              style={[styles.actionButton, { backgroundColor: 'gray' }]}
            >
              <Text style={styles.actionButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
