// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class MetadataTransactionBuffer {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): MetadataTransactionBuffer {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsMetadataTransactionBuffer(bb: flatbuffers.ByteBuffer, obj?: MetadataTransactionBuffer): MetadataTransactionBuffer {
    return (obj || new MetadataTransactionBuffer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsMetadataTransactionBuffer(bb: flatbuffers.ByteBuffer, obj?: MetadataTransactionBuffer): MetadataTransactionBuffer {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new MetadataTransactionBuffer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  size(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
  }

  signature(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
  }

  signatureLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  signatureArray(): Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
  }

  signer(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
  }

  signerLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  signerArray(): Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
  }

  version(): number {
    const offset = this.bb!.__offset(this.bb_pos, 10);
    return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
  }

  type(): number {
    const offset = this.bb!.__offset(this.bb_pos, 12);
    return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
  }

  maxFee(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 14);
    return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
  }

  maxFeeLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 14);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  maxFeeArray(): Uint32Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 14);
    return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
  }

  deadline(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 16);
    return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
  }

  deadlineLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 16);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  deadlineArray(): Uint32Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 16);
    return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
  }

  targetKey(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 18);
    return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
  }

  targetKeyLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 18);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  targetKeyArray(): Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 18);
    return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
  }

  scopedMetadataKey(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 20);
    return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
  }

  scopedMetadataKeyLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 20);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  scopedMetadataKeyArray(): Uint32Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 20);
    return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
  }

  /**
   * In case of address it is empty array. In case of mosaic or namespace id it is 8 byte array(or 2 uint32 array)
   */
  targetId(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 22);
    return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
  }

  targetIdLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 22);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  targetIdArray(): Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 22);
    return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
  }

  valueSizeDelta(): number {
    const offset = this.bb!.__offset(this.bb_pos, 24);
    return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
  }

  valueSize(): number {
    const offset = this.bb!.__offset(this.bb_pos, 26);
    return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
  }

  value(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 28);
    return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
  }

  valueLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 28);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  valueArray(): Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 28);
    return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
  }

  static startMetadataTransactionBuffer(builder: flatbuffers.Builder) {
    builder.startObject(13);
  }

  static addSize(builder: flatbuffers.Builder, size: number) {
    builder.addFieldInt32(0, size, 0);
  }

  static addSignature(builder: flatbuffers.Builder, signatureOffset: flatbuffers.Offset) {
    builder.addFieldOffset(1, signatureOffset, 0);
  }

  static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset {
    builder.startVector(1, data.length, 1);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt8(data[i]!);
    }
    return builder.endVector();
  }

  static startSignatureVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(1, numElems, 1);
  }

  static addSigner(builder: flatbuffers.Builder, signerOffset: flatbuffers.Offset) {
    builder.addFieldOffset(2, signerOffset, 0);
  }

  static createSignerVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset {
    builder.startVector(1, data.length, 1);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt8(data[i]!);
    }
    return builder.endVector();
  }

  static startSignerVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(1, numElems, 1);
  }

  static addVersion(builder: flatbuffers.Builder, version: number) {
    builder.addFieldInt32(3, version, 0);
  }

  static addType(builder: flatbuffers.Builder, type: number) {
    builder.addFieldInt16(4, type, 0);
  }

  static addMaxFee(builder: flatbuffers.Builder, maxFeeOffset: flatbuffers.Offset) {
    builder.addFieldOffset(5, maxFeeOffset, 0);
  }

  static createMaxFeeVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createMaxFeeVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
  static createMaxFeeVector(builder: flatbuffers.Builder, data: number[] | Uint32Array | Uint8Array): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt32(data[i]!);
    }
    return builder.endVector();
  }

  static startMaxFeeVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addDeadline(builder: flatbuffers.Builder, deadlineOffset: flatbuffers.Offset) {
    builder.addFieldOffset(6, deadlineOffset, 0);
  }

  static createDeadlineVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createDeadlineVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
  static createDeadlineVector(builder: flatbuffers.Builder, data: number[] | Uint32Array | Uint8Array): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt32(data[i]!);
    }
    return builder.endVector();
  }

  static startDeadlineVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addTargetKey(builder: flatbuffers.Builder, targetKeyOffset: flatbuffers.Offset) {
    builder.addFieldOffset(7, targetKeyOffset, 0);
  }

  static createTargetKeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset {
    builder.startVector(1, data.length, 1);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt8(data[i]!);
    }
    return builder.endVector();
  }

  static startTargetKeyVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(1, numElems, 1);
  }

  static addScopedMetadataKey(builder: flatbuffers.Builder, scopedMetadataKeyOffset: flatbuffers.Offset) {
    builder.addFieldOffset(8, scopedMetadataKeyOffset, 0);
  }

  static createScopedMetadataKeyVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createScopedMetadataKeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
  static createScopedMetadataKeyVector(builder: flatbuffers.Builder, data: number[] | Uint32Array | Uint8Array): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt32(data[i]!);
    }
    return builder.endVector();
  }

  static startScopedMetadataKeyVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addTargetId(builder: flatbuffers.Builder, targetIdOffset: flatbuffers.Offset) {
    builder.addFieldOffset(9, targetIdOffset, 0);
  }

  static createTargetIdVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset {
    builder.startVector(1, data.length, 1);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt32(data[i]!);
    }
    return builder.endVector();
  }

  static startTargetIdVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(1, numElems, 1);
  }

  static addValueSizeDelta(builder: flatbuffers.Builder, valueSizeDelta: number) {
    builder.addFieldInt16(10, valueSizeDelta, 0);
  }

  static addValueSize(builder: flatbuffers.Builder, valueSize: number) {
    builder.addFieldInt16(11, valueSize, 0);
  }

  static addValue(builder: flatbuffers.Builder, valueOffset: flatbuffers.Offset) {
    builder.addFieldOffset(12, valueOffset, 0);
  }

  static createValueVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset {
    builder.startVector(1, data.length, 1);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt8(data[i]);
    }
    return builder.endVector();
  }

  static startValueVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(1, numElems, 1);
  }

  static endMetadataTransactionBuffer(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static finishMetadataTransactionBufferBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset) {
    builder.finish(offset);
  }

  static finishSizePrefixedMetadataTransactionBufferBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset) {
    builder.finish(offset, undefined, true);
  }

  static createMetadataTransactionBuffer(builder: flatbuffers.Builder, size: number, signatureOffset: flatbuffers.Offset, signerOffset: flatbuffers.Offset, version: number, type: number, maxFeeOffset: flatbuffers.Offset, deadlineOffset: flatbuffers.Offset, targetKeyOffset: flatbuffers.Offset, scopedMetadataKeyOffset: flatbuffers.Offset, targetIdOffset: flatbuffers.Offset, valueSizeDelta: number, valueSize: number, valueOffset: flatbuffers.Offset): flatbuffers.Offset {
    MetadataTransactionBuffer.startMetadataTransactionBuffer(builder);
    MetadataTransactionBuffer.addSize(builder, size);
    MetadataTransactionBuffer.addSignature(builder, signatureOffset);
    MetadataTransactionBuffer.addSigner(builder, signerOffset);
    MetadataTransactionBuffer.addVersion(builder, version);
    MetadataTransactionBuffer.addType(builder, type);
    MetadataTransactionBuffer.addMaxFee(builder, maxFeeOffset);
    MetadataTransactionBuffer.addDeadline(builder, deadlineOffset);
    MetadataTransactionBuffer.addTargetKey(builder, targetKeyOffset);
    MetadataTransactionBuffer.addScopedMetadataKey(builder, scopedMetadataKeyOffset);
    MetadataTransactionBuffer.addTargetId(builder, targetIdOffset);
    MetadataTransactionBuffer.addValueSizeDelta(builder, valueSizeDelta);
    MetadataTransactionBuffer.addValueSize(builder, valueSize);
    MetadataTransactionBuffer.addValue(builder, valueOffset);
    return MetadataTransactionBuffer.endMetadataTransactionBuffer(builder);
  }
}
