// SPDX-License-Identifier: Apache-2.0

package chisel3.util.random

import chisel3._

/** Fibonacci Linear Feedback Shift Register (LFSR) generator.
  *
  * A Fibonacci LFSR can be generated by defining a width and a set of tap points (corresponding to a polynomial). An
  * optional initial seed and a reduction operation ([[XOR]], the default, or [[XNOR]]) can be used to augment the
  * generated hardware. The resulting hardware has support for a run-time programmable seed (via [[PRNGIO.seed]]) and
  * conditional increment (via [[PRNGIO.increment]]).
  *
  * $seedExplanation
  *
  * In the example below, a 4-bit Fibonacci LFSR is constructed. Tap points are defined as four and three (using LFSR
  * convention of indexing from one). This results in the hardware configuration shown in the diagram.
  *
  * {{{
  * val lfsr4 = Module(new FibonacciLFSR(4, Set(4, 3))
  * //                 +---+
  * // +-------------->|XOR|-------------------------------------------------------+
  * // |               +---+                                                       |
  * // |   +-------+     ^     +-------+           +-------+           +-------+   |
  * // |   |       |     |     |       |           |       |           |       |   |
  * // +---+  x^4  |<----+-----|  x^3  |<----------|  x^2  |<----------|  x^1  |<--+
  * //     |       |           |       |           |       |           |       |
  * //     +-------+           +-------+           +-------+           +-------+
  * }}}
  *
  * If you require a maximal period Fibonacci LFSR of a specific width, you can use [[MaxPeriodFibonacciLFSR]]. If you
  * only require a pseudorandom [[UInt]] you can use the [[FibonacciLFSR$ FibonacciLFSR companion
  * object]].
  * @see [[https://en.wikipedia.org/wiki/Linear-feedback_shift_register#Fibonacci_LFSRs]]
  * $paramWidth
  * $paramTaps
  * $paramSeed
  * $paramReduction
  * $paramStep
  * $paramUpdateSeed
  */
class FibonacciLFSR(
  width:         Int,
  taps:          Set[Int],
  seed:          Option[BigInt] = Some(1),
  val reduction: LFSRReduce = XOR,
  step:          Int = 1,
  updateSeed:    Boolean = false
) extends PRNG(width, seed, step, updateSeed)
    with LFSR {

  def delta(s: Seq[Bool]): Seq[Bool] = taps.map { case i => s(i - 1) }.reduce(reduction) +: s.dropRight(1)

}

/** A maximal period Fibonacci Linear Feedback Shift Register (LFSR) generator. The maximal period taps are sourced from
  * [[LFSR.tapsMaxPeriod LFSR.tapsMaxPeriod]].
  * {{{
  * val lfsr8 = Module(new MaxPeriodFibonacciLFSR(8))
  * }}}
  * $paramWidth
  * $paramSeed
  * $paramReduction
  */
class MaxPeriodFibonacciLFSR(width: Int, seed: Option[BigInt] = Some(1), reduction: LFSRReduce = XOR)
    extends FibonacciLFSR(width, LFSR.tapsMaxPeriod.getOrElse(width, LFSR.badWidth(width)).head, seed, reduction)

/** Utility for generating a pseudorandom [[UInt]] from a [[FibonacciLFSR]].
  *
  * For example, to generate a pseudorandom 8-bit [[UInt]] that changes every cycle, you can use:
  * {{{
  * val pseudoRandomNumber = FibonacciLFSR.maxPeriod(8)
  * }}}
  *
  * @define paramWidth @param width of pseudorandom output
  * @define paramTaps @param taps a set of tap points to use when constructing the LFSR
  * @define paramIncrement @param increment when asserted, a new random value will be generated
  * @define paramSeed @param seed an initial value for internal LFSR state
  * @define paramReduction @param reduction the reduction operation (either [[XOR]] or
  * [[XNOR]])
  */
object FibonacciLFSR {

  /** Return a pseudorandom [[UInt]] generated from a [[FibonacciLFSR]].
    * $paramWidth
    * $paramTaps
    * $paramIncrement
    * $paramSeed
    * $paramReduction
    */
  def apply(
    width:     Int,
    taps:      Set[Int],
    increment: Bool = true.B,
    seed:      Option[BigInt] = Some(1),
    reduction: LFSRReduce = XOR
  ): UInt = PRNG(new FibonacciLFSR(width, taps, seed, reduction), increment)

  /** Return a pseudorandom [[UInt]] generated using a maximal period [[FibonacciLFSR]]
    * $paramWidth
    * $paramIncrement
    * $paramSeed
    * $paramReduction
    */
  def maxPeriod(
    width:     Int,
    increment: Bool = true.B,
    seed:      Option[BigInt] = Some(1),
    reduction: LFSRReduce = XOR
  ): UInt = PRNG(new MaxPeriodFibonacciLFSR(width, seed, reduction), increment)

}
