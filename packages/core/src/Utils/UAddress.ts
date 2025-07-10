import {
  bytesToHex,
  toChecksumAddress,
  publicToAddress,
} from '@ethereumjs/util'
import { UBuffer } from './UBuffer'

export class UAddress {
  private address: Buffer

  private constructor(input: Buffer) {
    this.address = input
  }

  /**
   * Returns the wallet's address.
   */
  public getAddress(): Buffer {
    return this.address
  }

  /**
   * Returns the wallet's address as a "0x" prefixed hex
   */
  public getAddressHex(): string {
    return bytesToHex(this.getAddress()).toLowerCase()
  }

  /**
   * Returns the wallet's address as a "0x" prefixed hex checksummed
   * according to [EIP 55](https://github.com/ethereum/EIPs/issues/55).
   */
  public getChecksumAddress(): string {
    return toChecksumAddress(this.getAddressHex())
  }

  /******************
   * static
   */

  public static fromPublickey(input: Buffer | string) {
    return new UAddress(
      Buffer.from(publicToAddress(UBuffer.bufferOrHex(input)))
    )
  }

  public static fromAddress(input: Buffer | string) {
    return new UAddress(UBuffer.bufferOrHex(input))
  }
}
